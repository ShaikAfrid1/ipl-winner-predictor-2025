let teams = ["CSK", "RCB", "SRH", "MI", "GT", "PBKS", "RR", "KKR", "DC", "LSG"];
let logos = {
  CSK: "https://imgs.search.brave.com/KizUl7gEKTTQhovqsw1eAT8xWhI91BW-alBE57dNGd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NhLzRm/L2NiL2NhNGZjYmFk/MmExNmYzY2EyZDNj/YTllODg3MTBkMjkw/LmpwZw",
  RCB: "https://imgs.search.brave.com/Uom2Fm2zlHfXcT5CHXhN-VslLF5Wv7EF1ZqzXpmwtEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxMDQ3/MTkucG5n",
  SRH: "https://imgs.search.brave.com/OZBVEO6OeEUSY5BkTrPpXAayj2BB-831AK0U7QePPqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRmLzVj/Lzc2LzRmNWM3Njc3/OTM2MjIzYTU2MzU1/N2VkZWUxMmNiMDFl/LmpwZw",
  MI: "https://imgs.search.brave.com/37YwuMOStgMfFPTuaJsalz3t9LjFrjbd5W67frOTJ40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q2LzE0/LzVmL2Q2MTQ1ZjRi/YTI3ODRlYzYzMTNk/YWVmNjRiNmFhOTli/LmpwZw",
  GT: "https://imgs.search.brave.com/yzUZWgKCHzWIiKJ2lsazjpxf7mBn_y4mH-eX3aUCBu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWNhZmVhZTBkNjJk/OWU0MTYzZDE1NDUv/NjdhZGFjYjI1ZDcy/Y2FlNWRmYmZjNmFl/X0FEXzRuWGNQb1JH/WnB5dEt0Zk15OW4z/b0RTTmVXVEpfdU9U/dnppRVFDOGtyeUdJ/NVNMa2ZmMmFtNmFP/MlVCY2dqUGhuVngt/d2tOeUpDek04V0Nk/bTFfdUFKNVp1b001/Q0VsVGprZHVmQk9G/NDRWLWZHSlVhN19C/QUJIVlFINnFPaHVQ/dDJCUkQwZ1psU0Eu/YXZpZg",
  PBKS: "https://imgs.search.brave.com/S5nBdjhp6RFXIMbu_93HDmXT7CMqQ1RZgy0j2Bfu29E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkzNDk5/NTgucG5n",
  RR: "https://imgs.search.brave.com/niZfohAeyIG6H8eqAlb2mKTmBACjIZUvpAyh8v8VNgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE0Lzhi/LzhhLzE0OGI4YTM4/NmY0MDAyZmFkY2Zl/NDQ0MWI0NTIxNGU5/LmpwZw",
  KKR: "https://imgs.search.brave.com/RCNZxwMHHFEkxJEjnEO4CHDAZDkiABuChdFubw7Onmo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mc3BvcnRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMi9LS1ItTG9n/by5wbmc",
  DC: "https://imgs.search.brave.com/KvkSH1UAuAiBsgNw7IcD-a_d43Ojkjo4cyV4IekWJCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWNhZmVhZTBkNjJk/OWU0MTYzZDE1NDUv/NjdhZGFjYjM3YmMz/MDQyMzJlYTFjOGJl/X0FEXzRuWGYwUkR3/cm5fZS1JVjJmVHpN/WWtOZUN2U2t5emkz/ZzdDblJUWllqX3Jl/UXk3aU1zOU5SbzNC/a25pUF8zWVFQZ3Rw/S3RYU25sMHdWSGtm/RDFwN0RUQVowMEN4/N0VlVXVpLTZXT1VQ/UnNQeHVBbzh3NXZw/UDNsV0lienZLSXFG/ckliZE1NTDJwZGcu/YXZpZg",
  LSG: "https://imgs.search.brave.com/Y8GpBh2U4BCVQnLt_kHZm6UkdVe39iXOxjCK7BFy9Rs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2x1Y2tu/b3ctc3VwZXItZ2lh/bnRzMzU1MC5sb2dv/d2lrLmNvbS53ZWJw",
};

const btn = document.getElementById("predict-btn");
const teamName = document.getElementById("team-name");
const logo = document.getElementById("team-logo");

btn.addEventListener("click", () => {
  const randomTeam = teams[Math.floor(Math.random() * teams.length)];
  teamName.textContent = randomTeam;
  logo.src = logos[randomTeam];
  logo.style.opacity = 0; // fade-out first
  setTimeout(() => (logo.style.opacity = 1), 100); // then fade-in
});
