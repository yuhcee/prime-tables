interface ITableBodyProps {
  primeNumbers: Array<number>;
}

export const TableBody: React.FC<ITableBodyProps> = ({ primeNumbers }) => {
  return (
    <tbody>
      {primeNumbers.map((num, index, arr) => (
        <tr key={index}>
          {}
          <td id={'row-start'}>{num}</td>
          {arr.map((headerNum, i) => (
            <td key={i}>{num * headerNum}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
