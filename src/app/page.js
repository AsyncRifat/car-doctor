import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen">
      <p>Hello world!</p>

      <Button
        asChild={true}
        variant={'link'}
        size={'lg'}
        className="m-5 border border-green-600"
      >
        <Link href={'https://ibrahimrifatpro.web.app/'}>Click Me</Link>
      </Button>
      <Input placeholder="text shadcn" className="w-[200px]" />
    </div>
  );
}
