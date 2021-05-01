import { Request } from 'express'

export type ActionBody<Input> = {
  session_variables: Record<string, string>
  input: Input
  action: {
    name: string
  }
}

const actionInput = <Input>(req: Request): Input => {
  const body = req.body as ActionBody<Input>
  return body?.input
}

export default actionInput
