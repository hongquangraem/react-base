import { fork, all } from 'redux-saga/effects'

const sagas = []

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga))

  yield all(globalSagasForks)
}

export default globalSagas
