import { LoginButton } from '../lib/loginButton';
import { User } from '../lib/User';
import Background from '@/Background';
import { getAuthSession, getRequiredSession } from '@/lib/auth';
import Title from '@/components/title';
import Subtitle from '@/components/subtitle';
import Screen from '@/lib/Screen';
import Input from '@/components/unique';
import { redirect } from 'next/navigation'
 

export default async function Home() {

  const session = await getAuthSession()

  if (session?.user) {
      redirect("/dashboard")
  }

  if (session) {
    return (<>
      <Background />
      <User />
    </>
    )
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
    <div className="flex flex-col gap-16 justify-center mt-40 w-7/12">
      <Title>Tous vos médias sociaux, en un <Title blue>seul lien.</Title></Title>
      <Input />
      <Subtitle>Déjà un lien?<Subtitle blue><LoginButton /></Subtitle></Subtitle>

      </div>
      <Screen />
    <Background/>
    </div>
    
  )
}
