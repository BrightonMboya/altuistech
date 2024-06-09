import { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("I got a request")
  console.log(req.body)
  res.status(200).json({ message: 'Hello World!' })
}