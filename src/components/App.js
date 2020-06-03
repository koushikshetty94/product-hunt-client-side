import React from "react"
import Cards from "./Cards"
import Header from "./Header"
import Aside from "./Aside"
import axios from "axios"

let id = 0

let data = [
  {
    name: "Mailwarm",
    description: "The email warm-up tool.",
    img: "https://ph-files.imgix.net/c6fe0c7d-40f8-4c1a-9915-5673b1abbe91?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Email Marketing",
    number: 36,
    id: id++
  },
  {
    name: "EasyLlama",
    description: "Modern Sexual Harassment Training For Your Workplace",
    img: "https://ph-files.imgix.net/a1492fa6-87cd-4551-86d0-92b1a201d5af?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36
  },
  {
    name: "Phone Call Translator",
    description: "Translates your voice calls into 29 languages in real-time",
    img: "https://ph-files.imgix.net/76ee2898-6c6c-4d57-86c3-f42b961a97dc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "iPhone",
    number: 36,
    id: id++
  },
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    img: "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36,
    id: id++
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers.",
    img: "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36,
    id: id++
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    img: "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "iPhone",
    number: 36,
    id:id++
  }
]

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data : data,
      name:null,
      description:null,
      image:null,
      token:"gmQSJB7WoiipIBhQ7tRBJrwvm7KpNRTZm3ndKXfXgik",
      test:null
    }
  }

  // to fetch data
  componentDidMount(){
    axios("https://api.producthunt.com/v1/posts/all?per_page=10",{
      method: "GET",
      headers:{
        "authorization" :`Bearer ${this.state.token}`,
        "Content-Type" :"application/json",
        "Accept":"application/json"
      }
    }).then(res => {
      console.log("asadsan")
      if(res.data &&res.data.posts){
        this.setState({data: res.data.posts
        })
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  // handleChangeName = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }


  incrementUpvote = (id) => {
    let updatedState = this.state.data.map(product => {
      if(product.id === id){
        product.number = product.number + 1
      }
      return product
    })
    this.setState({
      data: updatedState
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      data: this.state.data.concat({
        name:this.state.name,
        description:this.state.description,
        image:this.state.image
      })
    })
  }


  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex", "flex-direction": "row" }}>
          <div className="product_Wrapper">
            <Cards data={this.state.data} incrementUpvote={this.incrementUpvote}/>
          </div>
          <div style={{ "margin-left": "145px" }}>
            <Aside handleChange={this.handleChange} onSubmit={this.onSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}



export default App