import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateTypeMutation } from '../../../../api/typeApi';

const TypeCreatePage = () => {
  const navigate = useNavigate();

  const [createType /*, { isLoading }*/] = useCreateTypeMutation();

  const [name, setName] = useState('');

  const onNameChanged = (e) => setName(e.target.value);

  const onCreateType = async () => {
    try {
      await createType({
        name,
      }).unwrap();

      setName('');
      navigate(`/`);
    } catch (err) {
      console.error('Failed to save the type', err);
    }
  };

  return (
    <section>
      <h2>Create Type</h2>
      <form>
        <label>Title:</label>
        <input type='text' value={name} onChange={onNameChanged} />
        <button type='button' onClick={onCreateType}>
          Create
        </button>
      </form>
    </section>
  );
};

export default TypeCreatePage;
