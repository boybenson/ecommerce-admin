/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GetProductsContent = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  qtyInStock?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  signin?: Maybe<User>;
  signup?: Maybe<User>;
};


export type MutationCreateProductArgs = {
  content?: InputMaybe<ProductCreateContent>;
};


export type MutationSigninArgs = {
  content?: InputMaybe<UserSigninContent>;
};


export type MutationSignupArgs = {
  content?: InputMaybe<UserSignupContent>;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  qtyInStock?: Maybe<Scalars['Float']['output']>;
};

export type ProductCreateContent = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  qtyInStock?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getProducts?: Maybe<Array<Maybe<Product>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetProductsArgs = {
  content?: InputMaybe<GetProductsContent>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type UserSigninContent = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type UserSignupContent = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role: Scalars['String']['input'];
};
