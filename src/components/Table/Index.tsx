import { TableBody } from '../TableBody';
import { TableHead } from '../TableHead';

interface ITableProps {
  primeNumbers: Array<number>;
}

const Table: React.FC<ITableProps> = ({ primeNumbers }) => {
  return (
    <div>
      {' '}
      <table>
        <TableHead primeNumbers={primeNumbers} />
        <TableBody primeNumbers={primeNumbers} />
      </table>
    </div>
  );
};

export default Table;