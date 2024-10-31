"use client";
import { useParams } from 'next/navigation'

const AccountVerify = () => {

    
  const params = useParams<{ account: string; id: string }>()
  const account = params.account
  const id = params.id


    return ( 
        <div className="max-w-3xl mx-auto mt-10">
            <p>URL ACCOUNT - {account}</p>
            <p>URL ID - {id}</p>
        </div>
     );
}
 
export default AccountVerify;