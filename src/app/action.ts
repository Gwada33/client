'use server'
 
import { cookies } from 'next/headers'
 
export async function create(data: string, value: string) {
  cookies().set(data, value, { secure: true })
}