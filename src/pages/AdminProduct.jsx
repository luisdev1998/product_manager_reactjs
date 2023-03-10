import Alert from '../components/Alert'
import useProducts from '../hooks/useProducts';

import Cards from '../components/Product/Cards';
import Forms from '../components/Product/Forms';
import TableProducts from '../components/Product/TableProducts';

function AdminProduct() {
  const {
    products,
    categories,
    saveProduct,
    saveCategory,
    deleteProduct,
    alert
  } = useProducts();

  return (
    <div>
      <Alert 
        errorObj={alert}
      />
      {/*************** CARDS ***************/}
      <Cards products={products} categories={categories}/>
      {/*************** BUTTONS AND MODALS ***************/}
      <Forms categories={categories} saveProduct={saveProduct} saveCategory={saveCategory}/>
      {/*************** ALERT ***************/}
      {/*************** TABLE ***************/}
      <TableProducts products={products} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default AdminProduct