const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
    ORDER BY sale_id, product_id;`,
  );
  return camelize(result);
};

const getById = async (saleId) => {
  const [result] = await connection.execute(
      `SELECT s.date, sp.product_id, sp.quantity 
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
    WHERE sale_id = ?`,
    [saleId],
  );
  return camelize(result);
};

const insertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (Now())',
  );
  return insertId;
};

const insertSalesProducts = async (sale, product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [sale, product.productId, product.quantity],
  );
  return insertId;
};

module.exports = {
  getAll,
  getById,
  insertSales,
  insertSalesProducts,
};