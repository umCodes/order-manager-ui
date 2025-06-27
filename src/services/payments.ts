interface Invoice {
  invoice_id: string;
  amount_applied: number;
}

interface PaymentInput {
  customer_id: string;
  payment_mode: string;
  amount: number;
  date: string;
  reference_number: string;
  invoices: Invoice[];
}





export async function addPayment({
  customer_id,
  payment_mode,
  amount,
  date,
  reference_number,
  invoices
}: PaymentInput){

    try {
    const response = await fetch(
      `https://order-manager-api-yz7t.onrender.com/api/add-payment`,
      {
        method: 'POST',
        body: JSON.stringify({
          customer_id,
          payment_mode,
          amount,
          date,
          reference_number,
          invoices
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('Payment submitted:', data);
    return data;
  } catch (error) {
    console.error('Error submitting payment:', error);
    throw error; // rethrow if you want calling code to handle it
  }
}


}