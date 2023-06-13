import Link from 'next/link';
async function getData() {
    const res = await fetch('https://api.github.com/users/nddung2812/repos',
        {
            next: {
                revalidate: 60,
            },
        }
    )
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  export default async function ReposPage() {
    const data = await getData();
    console.log(data)
    return (
        <div className='repos-container'>
        <h2>test</h2>
        </div>
    );
};