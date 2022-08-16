import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  selectTypeById,
  useUpdateTypeMutation,
  useDeleteTypeMutation,
} from '../../../../api/typeApi';

const TypeEditPage = () => {
  const { typename } = useParams();
  const navigate = useNavigate();

  const [updateType /*, { isLoading }*/] = useUpdateTypeMutation();
  const [deleteType] = useDeleteTypeMutation();

  const type = useSelector((state) => selectTypeById(state, typename));
  const [name, setName] = useState('');

  useEffect(() => {
    setName(type?.name);
  }, [type]);

  const onNameChanged = (e) => setName(e.target.value);

  const onUpdateType = async () => {
    try {
      await updateType({
        id: type.id,
        name,
      }).unwrap();

      setName('');
      navigate(`/`);
    } catch (err) {
      console.error('Failed to save the type', err);
    }
  };

  const onDeleteType = async () => {
    try {
      await deleteType({ id: type.id }).unwrap();

      setName('');
      navigate('/');
    } catch (err) {
      console.error('Failed to delete the type', err);
    }
  };

  return type ? (
    <section>
      <h2>Edit Type</h2>
      <form>
        <label>Title:</label>
        <input type='text' value={name || ''} onChange={onNameChanged} />
        <button type='button' onClick={onUpdateType}>
          Update
        </button>
        <button type='button' onClick={onDeleteType}>
          Delete
        </button>
      </form>
    </section>
  ) : (
    <h4>Not Found</h4>
  );
};

export default TypeEditPage;
