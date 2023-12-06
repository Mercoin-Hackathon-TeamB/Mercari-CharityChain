const Purchase = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>{params.id}</div>
    </div>
  );
};

export default Purchase;
