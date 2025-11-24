import Image from 'next/image';

export default function LeadershipCard({ name, title, quote, imageSrc }: { name: string; title: string; quote: string; imageSrc: string }) {
  return (
    <div style={{ backgroundColor: '#0B1A2D', color: '#F9F9F9' }} className="rounded-lg shadow-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-full object-cover" />
      </div>
      <h3 className="text-xl font-bold" style={{ color: '#D4AF37' }}>{name}</h3>
      <p className="text-sm">{title}</p>
      <blockquote className="italic text-sm mt-4" style={{ color: '#F9F9F9' }}>"{quote}"</blockquote>
    </div>
  );
}