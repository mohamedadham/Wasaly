import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search";
import { Router, Switch, Route } from "react-router-dom";
// import NavBar from './components/navbar'
import CreateProduct from "./components/product owner/createProduct";
import UpdateProduct from "./components/product owner/updateProduct";
import ListProducts from "./components/product owner/listProducts";
import Connections from "./components/product owner/connection";
import ProductOwnerDetails from "./components/product owner/productOwnerDetails";
import AdminProductOwners from "./components/admin/productOwners";
import ListCatProducts from "./components/product owner/CategoryProducts";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AdminLogin from "./components/admin/adminLogin";
import ServiceOwnerProfile from "./components/service owner/serviceOwnerProfile";
import Checkout from "./components/checkout";
import Payment from "./components/payment";
import UserNavBar from "./components/user/userNavBar";
import UserAndCustomerNavBar from "./components/layouts/site/navbar";
/*** Service owners */
import ServiceOwnerOrders from "./components/service owner/orders";
import Reviews from "./components/service owner/reviews/reviews";
/**** Admin ****/
import AdminServiceOwners from "./components/admin/serviceOwners";
import All from "./components/admin/categories/all";
import Landing from "./components/layouts/dashboard/landing";
/**
 * Admin NavBar Ya adham :)
 */
import NavBar from "./components/admin/adminNavBar";
<<<<<<< HEAD
import ServiceOrderForm from './components/customer/serviceForm';
import orderForm from './components/customer/orderForm';
=======
import ServiceOrderForm from "./components/customer/serviceForm";
>>>>>>> 96ee4956b9f9f190184a550e0c266018808a8c07
// import Delivery from './components/customer/delivery';
import Delivery from "./components/customer/delivery";
import Order from "./components/user/orders";
import OrderDetails from "./components/user/orderDetails";
import ProductDetails from "./components/product owner/Cart/ProductDetails";
// import Cart from './components/product owner/Cart/Cart';
import CartPage from "./components/product owner/Cart/CartPage";

// import MainCart  from './components/product owner/Cart/AddCart';
import LandingPage from "./pages/landingPage";
import {
  isUser,
  isCustomer,
  isProductOwner,
  isServiceOwner,
} from "./services/authServices";
import SearchResults from "./pages/searchResults";
import FooterPage from "./components/layouts/site/footer";
import ProductOwnerRoute from "./components/routes/productOwnerRoute";
import UserRoute from "./components/routes/UserRoute";
import Auth from "./components/product owner/Cart/UserCart";
import table from "./components/table";
import Layout from "./components/layouts/dashboard/layout";
import SiteLayout from "./components/layouts/site/layout";

function App() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* <NavBar/> */}
      <Route
        exact
        path={[
          "/service-owner/landing",
          "/product-owner/landing",
          "/admin/landing",
          "/service-owner/orders", 
          "/service-owner/connection",
          "/product-owner/connections",
          "/admin/service-owners",
          "/admin/categories",
          "/admin/product-owners",
          "/service-owner/reviews",
          "/service-owner/product-orders",
          "/product-owner/products/create",
          "/product-owner/products/:id/edit",
          "/product-owner/products",
          "/product-owner/orders"
        ]}
      >
        <Layout>
          <Route exact path={[
            "/service-owner/landing",
            "/product-owner/landing",
            "/admin/landing"
          ]}
          component={Landing}
          />
          <Route
            exact
            path="/service-owner/orders"
            component={ServiceOwnerOrders}
          />
          <Route
            exact
            path="/service-owner/connection"
            component={ProductOwnerDetails}
          />
          <Route exact path="/service-owner/reviews" component={Reviews} />
          {/* Product owner routes */}
          <Route
            exact
            path="/product-owner/connections"
            component={Connections}
          />

          {/* Admin routes */}
          <Route
            exact
            path="/admin/service-owners"
            component={AdminServiceOwners}
          />
          <Route exact path="/admin/categories" component={All} />

          <ProductOwnerRoute exact path="/product-owner/products/create">
            <CreateProduct />
          </ProductOwnerRoute>

          <ProductOwnerRoute exact path="/product-owner/products/:id/edit">
            <UpdateProduct />
          </ProductOwnerRoute>

          <ProductOwnerRoute exact path="/product-owner/products">
            <ListProducts />
          </ProductOwnerRoute>

          <Route exact path="/admin/product-owners/">
            <AdminProductOwners />
          </Route>
        </Layout>
      </Route>

        <Switch>
          <Route
            exact
            path="/serviceownerprofile/:id"
            component={ServiceOwnerProfile}
          />
          
          <Route
            exact
            path="/payment"
            component={Payment}
          />

          <Route exact path="/admin">
            <NavBar />
            <AdminLogin />
          </Route>

          
            <Route
              exact
              path={[
                "/register",
                "/",
                "/search/:id",
                "/categoryproducts/:id",
                "/products/create",
                "/products/:id/edit",
                "/products",
                "/sO",
                "/orders",
                "/orders/:id",
                "/:id/ownerinfo",
                "/cart",
                "/login",
                "/table"
              ]}
            >
              <SiteLayout>
              <div style={{ flex: "1 0 auto", marginTop: "12vh" }}>
              <Route exact path="/register" component={Register} />

              <Route exact path="/" component={LandingPage} />
              {/* <UserNavBar /> */}
              {/* <Route exact path="/" component={Delivery} /> */}

              <Route exact path="/search/:id" component={SearchResults} />
              <Route
                exact
                path="/categoryproducts/:id"
                component={ListCatProducts}
              />
              <div className="container">

                {/* <Route exact path="/test" >
              < Category />
            </Route> */}
<<<<<<< HEAD
         
            <Route exact path="/sO" component={ServiceOrderForm} />
            <UserRoute>
            <Route exact path="/addOrder" component={Auth(orderForm, true)} />
            {/* <Route exact path="/" component={Delivery} /> */}
</UserRoute>
            <Route exact path="/orders" component={Order} />
            <Route exact path="/orders/:id" component={OrderDetails} />
            {/* http://localhost:3000/5ef231d4a5a9572baa78364f/ownerinfo */}
            <Route exact path="/:id/ownerinfo" component={ProductDetails} />
            <Route exact path="/cart" component={Auth(CartPage, true)} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/table" component={table} />

=======
                <Route exact path="/sO" component={ServiceOrderForm} />
                {/* <Route exact path="/" component={Delivery} /> */}

                <Route exact path="/orders" component={Order} />
                <Route exact path="/orders/:id" component={OrderDetails} />
                {/* http://localhost:3000/5ef231d4a5a9572baa78364f/ownerinfo */}
                <Route exact path="/:id/ownerinfo" component={ProductDetails} />
                <Route exact path="/cart" component={Auth(CartPage, true)} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/table" component={table} />
                </div>
                </div>
              </SiteLayout>
            </Route>
>>>>>>> 96ee4956b9f9f190184a550e0c266018808a8c07

            {/* <div className="menu-items">
                
              {products.map(item => <Products item={item} key={item.itemId} handleClick={this.handleClick} {...props} />)}
       
       </div> 
       
           }/> */}
        </Switch>
    </div>
  );
}

export default App;
