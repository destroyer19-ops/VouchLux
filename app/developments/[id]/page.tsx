export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-nexa-blue">Property Detail Page for ID: {params.id}</h1>
      <p className="text-lg text-nexa-black mt-4">This page will display details for a specific property.</p>
    </main>
  );
}
