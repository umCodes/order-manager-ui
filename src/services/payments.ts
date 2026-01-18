import type { Draft } from "../hooks/useDrafts";


export async function addPayment(draft: Draft) {
  try {
    const response = await fetch(`${VITE_API_URL}/api/add-payment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      customer_id: draft.customer_id,
                      payment_mode: 'cash',
                      amount: draft.total,
                      date: new Date().toISOString().split('T')[0],
                      reference_number: draft.invoice_number,
                      invoices: [{ invoice_id: draft.invoice_id , amount_applied: draft.total }]
                    })
                  });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('Payment submitted:', data);
    return data;
  } catch (error) {
    console.error('Error submitting payment:', error);
    throw error;
  }
}
