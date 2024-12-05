import { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href='/search'>rjator</Link>
    </div>
  )
}

export default NotFound;