<!-- <template>
  <div>
    <Heading title="Employers" />
    <div class="resume-text-color">
      <li>
        <b>BandhanLife Insurance (Prior AegonLife)</b><br />
        <i class="text-sm ml-5 text-cyan-100">Principal Frontend Engineer</i>
        Nov 2020 - Present
      </li>

      <li>
        <b> Capgemini India, Pune</b><br />
        <i class="text-sm ml-5 text-cyan-100">Manager</i>
        Apr 2020 - Nov 2020
      </li>

      <li>
        <b>Cognizant India & UK</b><br />
        <i class="text-sm ml-5 text-cyan-100">Lead Frotend Architect Pune(India), London(UK)</i>
        Mar 2012 - Apr 2020
      </li>

      <li>
        <b> Symphony Teleca</b><br />
        <i class="text-sm ml-5 text-cyan-100">Product Engineer Level 2 Pune, India</i>
        2010 - 2012
      </li>

      <li>
        <b>E-Zest Technology PVT.LTD</b><br />
        <i class="text-sm ml-5 text-cyan-100">Team/Technical Lead Pune</i>
        2009-2010
      </li>

      <li>
        <b>Cybage Softwares</b><br />
        <i class="text-sm ml-5 text-cyan-100">Sr.Software Engineer Pune</i>
        2006 - 2009
      </li>

    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style> -->

<template>
  <section class="max-w-full">
    <Heading title="Employment History" />
    <div class="overflow-x-auto">
      <table class="text-left w-full text-sm border  rounded-lg overflow-hidden">
        <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <tr>
            <th class="px-4 py-3 font-semibold">Company</th>
            <th class="px-4 py-3 font-semibold">Job Title</th>


            <th class=" py-3 font-semibold">From</th>
            <th class=" py-3 font-semibold">To</th>
          </tr>
        </thead>
        <tbody class="dark:divide-gray-700">
          <tr v-for="(job, index) in jobs" :key="index" class="hover:bg-gray-50 dark:hover:bg-gray-100">
            <td class="px-4 py-3">{{ job.company }}</td>
            <td class="px-4 py-3">{{ job.title }}</td>


            <td class="px-2 py-3">{{ job.from }}</td>
            <td class="px-2 py-3">{{ job.to }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    company: 'Bandhan Life Insurance',
    title: 'Principal UI Architect',
    location: 'Pune',
    current: true,
    from: 'Nov-2020',
    to: 'Present',
  },
  {
    company: 'Capgemini India Pvt Ltd',
    title: 'Manager',
    location: 'Pune',
    current: false,
    from: 'May-2020',
    to: 'Nov-2020',
  },
  {
    company: 'Cognizant Technology Solutions',
    title: 'Lead Architect - Technology',
    location: 'Pune',
    current: false,
    from: 'Mar-2012',
    to: 'May-2020',
  },
  {
    company: 'Symphony Services Corp Pvt Ltd',
    title: 'Senior Engineer - Product Development',
    location: 'Pune',
    current: false,
    from: 'Sept-2010',
    to: 'Mar-2012',
  },
  {
    company: 'e-Zest Solutions Ltd',
    title: 'Team Lead',
    location: 'Pune',
    current: false,
    from: 'Nov-2009',
    to: 'Jun-2010',
  },
  {
    company: 'Cybage Softwares Pvt Ltd',
    title: 'Sr. Software Engineer',
    location: 'Pune',
    current: false,
    from: 'Sept-2006',
    to: 'Nov-2009',
  },
  {
    company: 'E zest Solutions Ltd',
    title: 'Software Engineer',
    location: 'Pune',
    current: false,
    from: 'Nov-2005',
    to: 'Sept-2006',
  },
  {
    company: 'Eluminious Technologies',
    title: 'Software Engineer',
    location: 'Pune',
    current: false,
    from: 'Mar-2005',
    to: 'Sept-2005',
  },
]
</script>
