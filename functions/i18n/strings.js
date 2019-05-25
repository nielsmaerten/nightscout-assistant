module.exports = {
  en: {
    translation: {
      signIn: {
        completed: "Now, you can try asking: 'Hey Google, ask Nightscout Status what my glucose is'",
        request: "To access your glucose"
      },
      errors: {
        noNsSite: `Looks like you haven't linked your Nightscout site yet.
        To continue, visit {{- homepageUrl}}`,
        noBgReading: "Hmmm. I could not find a recent glucose reading.",
        invalidUrl: {
          p1: `Sorry, the Nightscout URL you gave me doesn't appear to be valid. 
              Can you check on {{- homepageUrl}} ?`,
          p2: "Make sure your url starts with http."
        },
        notFound: `Sorry, I couldn't find your Nightscout site. 
        Check if you've entered the correct URL on {{- homepageUrl}}`,
        unauthorized: `Sorry, it looks like I don't have permission to access your Nightscout site.
        Try entering your API secret on {{- homepageUrl}}`,
        nsSiteError: `Sorry, there seems to be a problem with your Nightscout site. 
        I wasn't able to get your status.`
      },
      trends: {
        DoubleUp: "rising fast",
        SingleUp: "rising",
        FortyFiveUp: "rising slowly",
        Flat: "stable",
        FortyFiveDown: "decreasing slowly",
        SingleDown: "decreasing",
        DoubleDown: "dropping fast"
      },
      answers: {
        noTrend: "{{bg}} as of {{ago}}",
        withTrend: "{{bg}} and {{trend}} as of {{ago}}"
      }
    }
  },
  nl: {
    translation: {

    }
  }
} 