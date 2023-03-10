let tbody = document.getElementById("tbody");

fetch("http://localhost:3000/user?id=1&id=2&id=3&id=4")
  .then((res) => res.json()) //ESTUDAR PROMISES
  .then((json) => {
    json.map((data) => {
      console.log(data.name);
      tbody.append(td_fun(data));
    });
  });

function td_fun({ profile, name, email, status, role }) {
  let td = document.createElement("tr");
  td.innerHTML = ` <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
      <div class="flex-shrink-0 h-10 w-10">
        <img src="${profile}" class="h-10 w-10 rounded-full" alt="" />
      </div>
      <div class="ml-4">
        <div class="div.text-sm font-medium text-gray-900">
          ${name}
        </div>
        <div class="text-sm text-gray-500">
          ${email}
        </div>
      </div>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
  <span
    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
  >
    ${status}
  </span>
</td>
</td>
<td class="px-6 py-4 whitespace-nowrap">
  <span class="text-sm text-gray-500">${role}</span>
</td>
    `;
  return td;
}

console.log(tbody);
