import React, { FC, useMemo } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { isSameDay } from 'date-fns'

import { useGetScheduleQuery } from '@-local/db/lib/generated/api'
import Header from 'components/Header'
import TextPage from 'components/TextPage'
import getDays from './utils/getDays'
import Session from './components/Session'

const Tab = createMaterialTopTabNavigator()

const Schedule: FC = () => {
  const { loading, error, data } = useGetScheduleQuery()
  const { session } = data || {}
  const days = useMemo(() => session && getDays(session), [session])

  if (loading) return null
  // if (error || !data || !days) throw error
  if (error || !data || !days) return null

  const currentDay = days.find(({ value }) => isSameDay(Date.now(), value))?.name || days[0].name

  return (
    <>
      <Header>MOMENTUM KONF 2021</Header>
      <Tab.Navigator screenOptions={{ title: 'Plan' }} initialRouteName={currentDay}>
        {days &&
          days.map(({ id, name, sessions }) => {
            const Page: FC = () => (
              <TextPage>
                {sessions.map((session) => (
                  <Session key={session.id} {...session} />
                ))}
              </TextPage>
            )

            return (
              <Tab.Screen
                key={id}
                name={name}
                component={Page}
                options={{ title: `Plan na ${name} | Momentum`, tabBarLabel: id }}
              />
            )
          })}
      </Tab.Navigator>
    </>
  )
}

export default Schedule
