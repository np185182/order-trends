import CompanyButtonContainer from "../CompanyButton";
import TotalOrdersVsDateGraph from "../CompanyChart";
import CompanyDatePicker from "../CompanyDatePIcker";
import CompanyRadioButtonContainer from "../CompanyRadioButtonContainer";
import ReactSearchBar from "../CompanySearchBar";
import {
  ChartComponent,
  DatepickerComponent,
  MainContainer,
  RadioButtonComponent,
  SearchBarComponent,
  SubContainerOne,
  SubcontainerTwo,
} from "./styledComponents";
import { Helperutil } from "./API";

const CompanyTrend = () => {
  Helperutil();
  return (
    <MainContainer>
      <SubContainerOne>
        <SearchBarComponent>
          <ReactSearchBar />
        </SearchBarComponent>
        <DatepickerComponent>
          <CompanyDatePicker />
        </DatepickerComponent>
          <CompanyButtonContainer/>
      </SubContainerOne>
      <SubcontainerTwo>
        <ChartComponent>
          <TotalOrdersVsDateGraph />
        </ChartComponent>
        <RadioButtonComponent>
          <CompanyRadioButtonContainer />
        </RadioButtonComponent>
        </SubcontainerTwo>
    </MainContainer>
  );
};

export default CompanyTrend;
