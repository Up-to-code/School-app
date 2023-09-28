let str = `          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsa
architecto tempora veritatis illo maiores sint quidem, odit asperiores
sit enim animi veniam hic modi libero, eaque consectetur ad a.`

function Card() {
if(str.length > 60){str += "..."} 
  return (
    <div>
      <div className="w-72 h-52 rounded shadow  bg-zinc-50     ">
        <div className="h-1/2 bg-zinc-200"></div>
        <p className="font-semibold   text-lg pt-1 px-2 ">Title is test</p>
        <p className="pt-1 px-2">
        {str.slice(0,60).trimEnd()}
        </p>
      </div>
    </div>
  );
}

export default Card;
