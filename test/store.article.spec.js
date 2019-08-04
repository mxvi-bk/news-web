import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeArticle from "~/store/article";
import { cloneDeep } from "lodash";

test("testing article mutation: FETCH_ARTICLES", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeArticle));
  expect(store.state.articles).toStrictEqual([]);
  expect(store.state.page).toStrictEqual(0);
  expect(store.state.q).toStrictEqual("bitcoin");

  const payload = {
    articles: [
      {
        title: "title",
        description: "description"
      }
    ],
    page: 1,
    q: "bitcoin"
  };
  store.commit("FETCH_ARTICLES", payload);
  expect(store.state.articles).toStrictEqual(payload.articles);
  expect(store.state.page).toStrictEqual(payload.page);
  expect(store.state.q).toStrictEqual(payload.q);
});
