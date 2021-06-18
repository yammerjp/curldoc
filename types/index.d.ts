type Request = {
    port: string
    path: string
    header: { [key:string]: string }
}

type Response = {
  status: number
  header: { [key:string]: string }
  body: string
}

type Endpoint = {
    request: Request
    response: Response
}

type Block = {
    type: 'host' | 'request' | ResponseType
    value: string
}

type ResponseType = 'response'