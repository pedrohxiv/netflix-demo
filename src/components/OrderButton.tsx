export default function OrderButton({ priceId }: { priceId: string }) {
  const order = async () => {
    const data = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ priceId }),
    });

    const session = await data.json();

    window.location.href = session.url;
  };

  return (
    <button
      onClick={order}
      className="py-2.5 px-5 bg-red-500 text-white font-semibold"
    >
      Subscribe
    </button>
  );
}
