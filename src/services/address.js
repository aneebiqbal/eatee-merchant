import {deleteFunctionWithAuthToken, postFunctionWithAuthToken} from '../api';
import {baseUrl} from '../config';

export const createAddress = async (
  values,
  region,
  token,
  setLoading,
  setError,
  onSuccess,
) => {
  debugger;
  const body = {
    id: 0,
    note: values.notes,
    stateId: 0,
    cityId: 0,
    zipcode: '',
    addressLine1: values.address,
    addressLine2: values.street,
    addressLine3: values.street,
    longitude: region.longitude,
    latitude: region.latitude,
  };
  console.log(values.label)
  await setLoading(true);
  await postFunctionWithAuthToken(
    `${baseUrl}/Address/${
      body.id === 0 ? 'AddCustomerAdress' : 'UpdateCustomerAdress'
    }`,
    body,
    token,
  )
    .then(data => {
      debugger;
      console.log('data -- ', data);
      if (data.status === 200) {
        if (data) {
          setLoading(false);
          onSuccess();
        }
      } else {
        setError('Unable to create address');
        setLoading(false);
      }
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
};