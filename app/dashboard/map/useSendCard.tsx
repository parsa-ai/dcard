interface UseSendCardProps {
    data: {
        lat: string,
        long: string,
        pan: string,
        exMonth: string,
        exYear: string,
        cvv2: string,
        pin2: string,
        amount: string
    }
    token: string
}
export default async function useSendCard({ datas }: { datas: UseSendCardProps }) {
    const data = new URLSearchParams(datas.data);
    try {
        const response = await fetch(
            "https://paymentparsir.com/az_bank/month862522/pos.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${datas.token}`
                },
                body: data.toString()
            }
        );
        console.log(response);
        if (!response.ok) {
            throw new Error("Payment request failed");
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        
    }

}