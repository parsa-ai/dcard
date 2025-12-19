import UsersPageUi from '@/app/components/UsersPageUi'

import { User } from '@/lib/type';

async function UsersPage() {
    let res = await fetch("https://paymentparsir.com/az_bank/month862522/getUsers.php")
    let data : User[] = [await res.json()]

    return (
        <UsersPageUi usersData={data}></UsersPageUi>
    )
}

export default UsersPage