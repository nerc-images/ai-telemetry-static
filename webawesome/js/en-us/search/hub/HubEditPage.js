Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH hubName
          document.querySelector('#Page_hubName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubName');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setHubName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hubName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hubName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubName');
            const valid = form.reportValidity();
          });

          // PATCH hubId
          document.querySelector('#Page_hubId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setHubId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hubId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hubId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#Page_pageId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH hubResource
          document.querySelector('#Page_hubResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubResource');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setHubResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_hubResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_hubResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubResource');
            const valid = form.reportValidity();
          });

          // PATCH localClusterName
          document.querySelector('#Page_localClusterName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_localClusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setLocalClusterName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_localClusterName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_localClusterName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_localClusterName');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchHubVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'hubResource:' + event.currentTarget.getAttribute('data-hubResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });
});
