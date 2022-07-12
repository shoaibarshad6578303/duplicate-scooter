import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function product({post}) {
    return(
        <div>
         {post.data.length? post.data.map((product)=>{
        return (
            <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            {/* <Link href={`scooter/${product.category_name}`} passHref><a >{product.category_name}</a></Link> */}
            </div>
            )
          }):
        (<p></p>)
        }

        </div>
    )
}


    export async function getStaticPaths(){
    // local here
    //   const res = await fetch('http://127.0.0.1:8000/api/getProducts')

      // server
      const res = await fetch('http://scooterpanel.ranazain.com/api/getProducts')
  
      const data   = await res.json()
      
      const paths= data.data.map(post => {
        return {
          params: {
            categoryName: `${post.category_name}`
          }
        }
      })
    
      return {
        // paths:[
        //   {
        //     params: {categoryName: 'One'},
        //   },
        //   {
        //     params: {categoryName: 'Two'},
        //   },
         
        // ],
        paths: paths,
        fallback: false,
      }
    }
  
    export async function getStaticProps(context) {
      const {params} = context;
    //   const one="One";
      // Call an external API endpoint to get posts
      // local
    //   const res = await fetch(`http://127.0.0.1:8000/api/getSpecificProductList/${params.categoryName}`)
    //   const res = await fetch(`http://127.0.0.1:8000/api/getSpecificProductList/${one}`)
  
      // server
      const res = await fetch(`http://scooterpanel.ranazain.com/api/getSpecificProductList/${params.categoryName}`)
  
      const post   = await res.json()
  
    //   if(!products.data.id){
    //     return {
    //       notFound: true
    //     }
    //   }
  
      // console.log(`generating page for posts/${params.postId}`);
    
      // By returning { props: { posts } }, the Blog component
      // will receive `posts` as a prop at build tipostId
      return {
        props: {
            post,
        },
      }
    }