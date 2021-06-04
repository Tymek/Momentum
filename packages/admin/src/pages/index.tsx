import { useMemo, useEffect, useState, FC } from 'react'
import { useApolloClient } from '@apollo/client'
import { Admin, Resource } from 'react-admin'
import { DataProvider } from 'ra-core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import buildHasuraProvider from 'ra-data-hasura'

import moment from 'utils/moment'
import StyleVariables from 'components/styles/Variables'
import createAuthProvider from 'utils/authProvider'
import theme from 'utils/theme'
import StyleReset from 'components/StyleReset'
import Login from 'components/Login'
import i18nProvider from 'utils/i18nProvider'
import session from 'resources/session'
import topic from 'resources/topic'
import notification from 'resources/notification'
import speaker from 'resources/speaker'

const Panel: FC = () => {
  const client = useApolloClient()
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null)
  const authProvider = useMemo(() => createAuthProvider({ client }), [client])

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({ client })
      setDataProvider(() => dataProvider)
    }
    buildDataProvider()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return authProvider && dataProvider ? (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale="pl">
      <Admin
        theme={theme}
        loginPage={Login}
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        // dashboard={Dashboard}
      >
        <Resource {...notification} />
        <Resource {...session} />
        <Resource {...topic} />
        <Resource {...speaker} />
      </Admin>
      <StyleVariables />
      <StyleReset />
    </MuiPickersUtilsProvider>
  ) : (
    <></>
  )
}

export default Panel
