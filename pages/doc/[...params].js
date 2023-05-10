import { useRouter } from "next/router";

const DocDetail = () => {
  const {
    query: { params = [] },
  } = useRouter();

  console.log(useRouter());
  if (params.length === 3) {
    return (
      <>
        <h3>Doc index page</h3>
        <ul>
          <li>feature: {params[0]}</li>
          <li>concept: {params[1]}</li>
          <li>example: {params[2]}</li>
        </ul>
      </>
    );
  }

  if (params.length === 2) {
    return (
      <>
        <h3>Doc index page</h3>
        <ul>
          <li>feature: {params[0]}</li>
          <li>concept: {params[1]}</li>
        </ul>
      </>
    );
  }

  if (params.length === 1) {
    return (
      <>
        <h3>Doc index page</h3>
        <ul>
          <li>feature: {params[0]}</li>
        </ul>
      </>
    );
  }

  if (params.length === 0) {
    return (
      <>
        <h3>Doc index page</h3>
      </>
    );
  }
};

export default DocDetail;
