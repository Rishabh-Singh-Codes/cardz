import { render, screen, fireEvent } from "@testing-library/react";
import HistoryList from "../components/HistoryList";
import historyListMock from "../mock-data/historyList.json";

test("renders HistoryList and checks showData", () => {
  const setShowIndexMock = jest.fn();

  render(
    <HistoryList
      page="card"
      setShowIndex={setShowIndexMock}
      historyList={historyListMock}
    />
  );

  const containerElement = screen.getByTestId("history-list-container");
  expect(containerElement).toHaveClass("h-[40%] md:h-[20%] pt-6");

  const specificElement = screen.getAllByTestId("history-list-item-1")[0];
  fireEvent.click(specificElement);

  const details = screen.getAllByText("xxxxxxxxxxx4586")[0];
  expect(details).toBeInTheDocument();

  fireEvent.click(specificElement);
});
