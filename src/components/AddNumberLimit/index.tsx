interface IAddNumberLimit {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddNumberLimit: React.FC<IAddNumberLimit> = ({ onChange }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={onChange}
          placeholder={'Enter a number limit to generate...'}
        />
      </form>
      <br/>
    </div>
  );
};
