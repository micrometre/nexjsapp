import {NextRequest, NextResponse} from "next/server";
import { headers } from 'next/headers'
import fs from 'fs'
import path from 'path'


export async function POST(req: Request) {

  const data  =await req.json()
  console.log(data)

  return NextResponse.json(data)
}