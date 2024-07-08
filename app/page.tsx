import Card from "@/components/Card/Card"
import { createClient } from "@/supabase/supabase"


export const revalidate = 0;
const Home = async () => {
  const supabase = createClient();
  // const products = [
  //   {
  //     id:0,
  //     name:"Activa",
  //     price: 1000,
  //     imageUrl:"/Images/3.jpg",
  //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu tell"
  //   }
  // ]
  const { data:products, error } = await supabase.from('easy_sell').select()

  console.log("data from supabase" , products);
  
  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {products &&
              products.map((item, idx) => (
                <Card key={`${item.name}-${idx}`} {...item} image={`${process.env.SUPABASE_URL}/storage/v1/object/public/Storage/${item.image}`} />
              ))}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item, idx) => (
              <Card  key={`${item.name}-${idx}`} {...item} image={`${process.env.SUPABASE_URL}/storage/v1/object/public/Storage/${item.image}`} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our products are gone...</p>
        )}
      </div>
    </main>
  )
}

export default Home