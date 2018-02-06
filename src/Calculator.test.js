import React from 'react'
import Calculator from "./Calculator";
import { shallow } from 'enzyme'
import Faker from 'faker'

//It shows a running total that starts at 0
//Allows a user to input a number
//When a user clicks 'add' it adds it to the running total
//It doesn't allow non numerical characters (except '-' for minus sign)
//It automatically clears the field after clicking add
