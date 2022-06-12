import { createConnection, getConnection } from "typeorm";

beforeAll(async () => {
    await createConnection()
  })
  
  afterAll(async () => {
    const defaultConnection = getConnection('default')
    await defaultConnection.close()
  })