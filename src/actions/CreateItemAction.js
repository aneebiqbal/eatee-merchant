import {CREATE_ITEM_SUCCESS} from '../constants/action-types';
import {postFunctionWithAuthToken} from '../api';
import { baseUrl } from '../config';
import Toast from 'react-native-simple-toast';

export const createItemSuccess = data => {
    return {
      type: CREATE_ITEM_SUCCESS,
      payload: data,
    };
  };

  export const createNewItem = async (
    values,
    token,
    setLoading,
    onSuccess,
  ) => {
    await setLoading(true);
    await postFunctionWithAuthToken(
        `${baseUrl}/Item/AddItem`,
        values,
        token,
    )
      .then(data => {
        console.log('data -- ', data);
        setLoading(false);
        if (data.status === 200) {
          if (data) {
            onSuccess(values);
            Toast.show("Item Created Successfully");
          }
        } else {
          if (data.status === 400) {
          Toast.show(data.data.errors.Name[0]);
          } else {
            Toast.show('Unable to add item');
          }
          
        }
      })
      .catch(err => {
        console.log(err);
        Toast.show('Unable to add item');
        setLoading(false);
      });
  };
   export const getCatogeriesByMerchantId = async (token, merchantId) => {
    const response = await fetch( `${baseUrl}/Merchant/GetCategories?merchantId=${merchantId} `, {
      headers: {
        'Authorization': token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data;
  };