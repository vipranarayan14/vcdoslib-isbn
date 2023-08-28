// "use server";

import Papa from "papaparse";

export const getData = async (): Promise<Record<string, any>[]> => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/" +
    "2PACX-1vQ5qIl3I8n3EKIfsr5rYIhmg8eNffWrKI6zFUDYNDPUENq4KQp5SmnxKQ5OkzbxErTBX3y78r7Y488E/pub?gid=0&single=true&output=csv";
  const response = await fetch(url);
  const csv = await response.text();

  const json = await Papa.parse(csv, {
    header: true,
  });

  return json["data"];
};

// https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5qIl3I8n3EKIfsr5rYIhmg8eNffWrKI6zFUDYNDPUENq4KQp5SmnxKQ5OkzbxErTBX3y78r7Y488E/pub?gid=0&single=true&output=csv
// https://spreadsheets.google.com/feeds/cells/1nOIw4uUX2IVDVSU_GhqAnKRNC99AXMwK9ZRxxaeO30s/0/public/full?alt=json
