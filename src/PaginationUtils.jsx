const Paginate =(followers)=>{
const itemsPerpage=9;
const page=Math.ceil(followers.length/itemsPerpage)
const newFollower = Array.from({length:page},(_,index)=>{
    const start = index*itemsPerpage
    return followers.slice(start,start+itemsPerpage)
})
console.log(newFollower)
return newFollower
}

export default Paginate