import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import api from '../../services/api';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as PlanActions from '../../store/modules/plans/actions';

import pzIcon from '../../assets/pz-icon.svg';
import okIcon from '../../assets/ok-icon.svg';

import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

import { formatPrice } from '../../util/FormatPrice';

import {
  Container,
  Toggle,
  ToggleOption,
  PlansList,
  ButtonSelectedPlan,
  Features,
  Attendants,
  ContAttendants,
  Footer,
} from './styles';

interface Plans {
  id: number;
  name: string;
  description: string;
  prices: Prices;
  features: string[];
}

export interface Prices {
  monthly: number;
  yearly: number;
}

const DashboardPlans: React.FC = () => {
  const dispatch = useDispatch();

  const [plans, setPlans] = useState<Plans[]>([]);
  const [planType, setPlanType] = useState<string>('monthly');
  const [amountAttendants, setAmountAttendants] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false);

  const storePlan = useSelector((state: ApplicationState) => state.plan);

  useEffect(() => {
    api.get('/attendant').then(response => {
      setAmountAttendants(response.data.cost);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get('/plans').then(response => {
      setPlans(response.data);
      dispatch(PlanActions.ChoosePlan(response.data[1], 'monthly'));
    });
  }, [dispatch]);

  function handleChangeType() {
    if (planType === 'monthly') {
      setPlanType('yearly');
      dispatch(PlanActions.ChangePlanType('yearly'));
    } else {
      setPlanType('monthly');
      dispatch(PlanActions.ChangePlanType('monthly'));
    }
  }

  function handleSelectedPlan(idSelected: number) {
    const { id, name, description, features, prices } = plans[idSelected - 1];
    dispatch(
      PlanActions.ChoosePlan(
        { id, name, description, features, prices },
        planType,
      ),
    );
  }

  function handleAttendants(amount: number, cost: number) {
    dispatch(PlanActions.UpdateAttendants(amount, cost));
  }

  const handleConfirmPurchase = () => setIsShowingModal(!isShowingModal);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Container>
        <Toggle onClick={handleChangeType}>
          <ToggleOption active={planType === 'monthly'}>Mensal</ToggleOption>
          <ToggleOption active={planType === 'yearly'}>Anual</ToggleOption>
        </Toggle>

        <PlansList>
          {plans.map(plan => (
            <li key={plan.id}>
              <div>
                <img src={pzIcon} alt="pz-icon" />
                <p>{plan.name}</p>
              </div>

              <p>{plan.description}</p>
              <strong>
                {planType === 'monthly'
                  ? formatPrice(plan.prices.monthly)
                  : formatPrice(plan.prices.yearly)}
                /mês
              </strong>
              <ButtonSelectedPlan
                selected={storePlan.plan.id === plan.id}
                onClick={() => handleSelectedPlan(plan.id)}
              >
                Selecionar
              </ButtonSelectedPlan>
              <Features>
                {plan.features.map(feature => (
                  <p key={feature}>
                    <img src={okIcon} alt="ok-icon" />
                    {feature}
                  </p>
                ))}
              </Features>
            </li>
          ))}
        </PlansList>

        <div>
          <Attendants>
            <div>
              <strong>Atendentes</strong>
              <p>+{formatPrice(amountAttendants)}/mês por atendente</p>
            </div>
          </Attendants>

          <ContAttendants>
            <button
              onClick={() =>
                handleAttendants(storePlan.attendants - 1, amountAttendants)
              }
            >
              <MdKeyboardArrowLeft size={25} color="#00A6CE" />
            </button>
            <span>{storePlan.attendants}</span>
            <button
              onClick={() =>
                handleAttendants(storePlan.attendants + 1, amountAttendants)
              }
            >
              <MdKeyboardArrowRight size={25} color="#00A6CE" />
            </button>
          </ContAttendants>
        </div>
      </Container>

      <Footer>
        <div>
          <strong>Total: {formatPrice(storePlan.total)}/mês</strong>
          <p>
            Plano selecionado: {storePlan.plan.name} -{' '}
            {storePlan.type === 'monthly' ? 'Mensal' : 'Anual'}
          </p>
        </div>

        <button onClick={handleConfirmPurchase}>Contratar</button>

        <Modal isShowing={isShowingModal}>
          <strong>Compra efetuada com sucesso!</strong>

          <button onClick={handleConfirmPurchase}>Fechar</button>
        </Modal>
      </Footer>
    </>
  );
};

export default DashboardPlans;
