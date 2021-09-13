interface ITableHeadProps {
  primeNumbers: Array<number>;
}

export const TableHead: React.FC<ITableHeadProps> = ({ primeNumbers }) => {
  return (
    <thead>
      <tr>
        <th></th>
        {primeNumbers.map((num, index) => (
          <th key={index}>{num}</th>
        ))}
      </tr>
    </thead>
  );
};
