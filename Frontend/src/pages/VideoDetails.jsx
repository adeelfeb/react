import React from 'react';

const VideoDetails = ({ data }) => {
  console.log("The Embeding here",data.videoDetails?.embed?.iframeUrl)
  return (
    
    <div className="mt-4">
        <div className="mt-4">
        <h4 className="font-semibold">Embed URL:</h4>
          <iframe
          src={
            data.videoUrl
              ? `https://www.youtube.com/embed/${data.videoUrl.split("v=")[1]?.split("&")[0]}`
              : ""
          }
          width={data.videoDetails?.embed?.width || "560"} // Default width
          height={data.videoDetails?.embed?.height || "315"} // Default height
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>

      </div>
      <div className="mb-4">
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Duration:</strong> {data.duration}</p>
        
        {/* Display transcript based on language (e.g., English) */}
        <p><strong>Transcript (English):</strong> {data.transcript?.english || 'Not yet provided'}</p>
        <p><strong>Transcript (Hindi):</strong> {data.transcript?.hindi || 'Not yet provided'}</p>
        <p><strong>Transcript (Urdu):</strong> {data.transcript?.urdu || 'Not yet provided'}</p>

        {/* Display summary based on language */}
        <p><strong>Summary (English):</strong> {data.summary?.english || 'Not yet provided'}</p>
        <p><strong>Summary (Hindi):</strong> {data.summary?.hindi || 'Not yet provided'}</p>
        <p><strong>Summary (Urdu):</strong> {data.summary?.urdu || 'Not yet provided'}</p>
      </div>

      

      {/* Display QnA */}
      {data.qnas && (
        <div className="mt-4">
          <h4 className="font-semibold">QnA:</h4>
          {/* Display short questions */}
          <div>
            <h5>Short Questions:</h5>
            {data.qnas.shortQuestions?.length > 0 ? (
              data.qnas.shortQuestions.map((qna, index) => (
                <div key={index}>
                  <p><strong>Q:</strong> {qna.question}</p>
                  <p><strong>A:</strong> {qna.answer}</p>
                </div>
              ))
            ) : (
              <p>No short questions available.</p>
            )}
          </div>

          {/* Display MCQs */}
          <div>
            <h5>MCQs:</h5>
            {data.qnas.mcqs?.length > 0 ? (
              data.qnas.mcqs.map((mcq, index) => (
                <div key={index}>
                  <p><strong>Q:</strong> {mcq.question}</p>
                  <ul>
                    {mcq.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                  <p><strong>Correct Answer:</strong> {mcq.correctAnswer}</p>
                </div>
              ))
            ) : (
              <p>No MCQs available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetails;
