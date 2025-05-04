import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import IncomeVsExpense from "../components/child/IncomeVsExpense";
import OverallReport from "../components/child/OverallReport";
import PurchaseAndSales from "../components/child/PurchaseAndSales";
import UnitCountSeven from "../components/child/UnitCountSeven";
import MasterLayout from "../masterLayout/MasterLayout";
import AffiliatesServices from "../services/api/affiliates";
import ProductsServices from "../services/api/products";
import SalesServices from "../services/api/sales";
import { selectProducts, setProducts } from "../services/reducers/products";

const ReportsPage = () => {
  const dispatch = useDispatch();
  const myProducts = useSelector(selectProducts);

  const [affiliates, setAffiliates] = useState();
  const [affiliatesPending, setAffiliatesPending] = useState();
  const [recentSales, setRecentSales] = useState();

  const getProducts = useCallback(async () => {
    try {
      const response = await ProductsServices.getProducts();
      dispatch(setProducts(response));
    } catch (error) {
      console.error("Error in getProducts:", error);
    }
  }, [dispatch]);

  const getAffiliatesPending = async () => {
    try {
      const response = await AffiliatesServices.getAffiliatesPending();
      setAffiliatesPending(response);
    } catch (error) {
      console.error("Error in getAffiliates:", error);
      throw error;
    }
  };

  const getAllAfilliates = async () => {
    try {
      const response = await AffiliatesServices.getAffiliatesProducts();
      setAffiliates(response);
    } catch (error) {
      console.error("Error in getAllAfilliates:", error);
    }
  };

  const getAllSales = async () => {
    try {
      const response = await SalesServices.getMySales();
      setRecentSales(response);
    } catch (error) {
      console.error("Error in getAllAfilliates:", error);
    }
  };

  useEffect(() => {
    getProducts();
    getAllAfilliates();
    getAffiliatesPending();
    getAllSales();
  }, [getProducts]);

  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Relatórios" />

        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-12">
              <UnitCountSeven />
            </div>

            <div className="col-12">
              <IncomeVsExpense />
            </div>

            <div className="col-12">
              <OverallReport />
            </div>

            <div className="col-12">
              <PurchaseAndSales />
            </div>
          </div>
        </div>
      </MasterLayout>
    </>
  );
};

export default ReportsPage;
