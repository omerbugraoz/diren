interface ICityData {
  data: {
    place: string;
    date: string;
  }[];
}

const Popover = ({ data }: ICityData) => {
  return (
    <div className="bg-[#F5EEDC] p-4 max-w-60 rounded-lg">
      {data.map(item => (<div key={item.date}>{item.date} {item.place}</div>))}
    </div>
  );
};

export default Popover;
