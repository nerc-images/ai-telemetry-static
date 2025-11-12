Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeProject')?.addEventListener('change', (event) => {
    facetRangeChange('Project', event.target.value);
  });

  document.querySelector('#pageSelectSortProject_pk')?.addEventListener('change', (event) => {
    sort('Project', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'pk', true);
  });
  document.querySelector('#pageStatsProject_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'pk', false);
  });

  document.querySelector('#pageSelectSortProject_created')?.addEventListener('change', (event) => {
    sort('Project', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'created', true);
  });
  document.querySelector('#pageStatsProject_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'created', false);
  });

  document.querySelector('#pageSelectSortProject_modified')?.addEventListener('change', (event) => {
    sort('Project', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'modified', true);
  });
  document.querySelector('#pageStatsProject_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'modified', false);
  });

  document.querySelector('#pageSelectSortProject_archived')?.addEventListener('change', (event) => {
    sort('Project', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'archived', true);
  });
  document.querySelector('#pageStatsProject_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'archived', false);
  });

  document.querySelector('#pageSelectSortProject_hubId')?.addEventListener('change', (event) => {
    sort('Project', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'hubId', true);
  });
  document.querySelector('#pageStatsProject_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'hubId', false);
  });

  document.querySelector('#pageSelectSortProject_clusterName')?.addEventListener('change', (event) => {
    sort('Project', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'clusterName', true);
  });
  document.querySelector('#pageStatsProject_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortProject_projectName')?.addEventListener('change', (event) => {
    sort('Project', 'projectName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_projectName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'projectName', true);
  });
  document.querySelector('#pageStatsProject_projectName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'projectName', false);
  });

  document.querySelector('#pageSelectSortProject_description')?.addEventListener('change', (event) => {
    sort('Project', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'description', true);
  });
  document.querySelector('#pageStatsProject_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'description', false);
  });

  document.querySelector('#pageSelectSortProject_gpuEnabled')?.addEventListener('change', (event) => {
    sort('Project', 'gpuEnabled', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_gpuEnabled')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'gpuEnabled', true);
  });
  document.querySelector('#pageStatsProject_gpuEnabled')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'gpuEnabled', false);
  });

  document.querySelector('#pageSelectSortProject_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Project', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsProject_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortProject_classSimpleName')?.addEventListener('change', (event) => {
    sort('Project', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsProject_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortProject_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Project', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsProject_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortProject_sessionId')?.addEventListener('change', (event) => {
    sort('Project', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'sessionId', true);
  });
  document.querySelector('#pageStatsProject_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortProject_userKey')?.addEventListener('change', (event) => {
    sort('Project', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'userKey', true);
  });
  document.querySelector('#pageStatsProject_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'userKey', false);
  });

  document.querySelector('#pageSelectSortProject_saves')?.addEventListener('change', (event) => {
    sort('Project', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'saves', true);
  });
  document.querySelector('#pageStatsProject_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'saves', false);
  });

  document.querySelector('#pageSelectSortProject_objectTitle')?.addEventListener('change', (event) => {
    sort('Project', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'objectTitle', true);
  });
  document.querySelector('#pageStatsProject_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortProject_displayPage')?.addEventListener('change', (event) => {
    sort('Project', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'displayPage', true);
  });
  document.querySelector('#pageStatsProject_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortProject_editPage')?.addEventListener('change', (event) => {
    sort('Project', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'editPage', true);
  });
  document.querySelector('#pageStatsProject_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'editPage', false);
  });

  document.querySelector('#pageSelectSortProject_userPage')?.addEventListener('change', (event) => {
    sort('Project', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'userPage', true);
  });
  document.querySelector('#pageStatsProject_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'userPage', false);
  });

  document.querySelector('#pageSelectSortProject_download')?.addEventListener('change', (event) => {
    sort('Project', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'download', true);
  });
  document.querySelector('#pageStatsProject_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'download', false);
  });

  document.querySelector('#pageSelectSortProject_objectSuggest')?.addEventListener('change', (event) => {
    sort('Project', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsProject_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortProject_objectText')?.addEventListener('change', (event) => {
    sort('Project', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'objectText', true);
  });
  document.querySelector('#pageStatsProject_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'objectText', false);
  });

  document.querySelector('#pageSelectSortProject_solrId')?.addEventListener('change', (event) => {
    sort('Project', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'solrId', true);
  });
  document.querySelector('#pageStatsProject_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'solrId', false);
  });

  document.querySelector('#pageSelectSortProject_hubResource')?.addEventListener('change', (event) => {
    sort('Project', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'hubResource', true);
  });
  document.querySelector('#pageStatsProject_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortProject_clusterResource')?.addEventListener('change', (event) => {
    sort('Project', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_clusterResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'clusterResource', true);
  });
  document.querySelector('#pageStatsProject_clusterResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'clusterResource', false);
  });

  document.querySelector('#pageSelectSortProject_projectResource')?.addEventListener('change', (event) => {
    sort('Project', 'projectResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_projectResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'projectResource', true);
  });
  document.querySelector('#pageStatsProject_projectResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'projectResource', false);
  });

  document.querySelector('#pageSelectSortProject_projectDisplayName')?.addEventListener('change', (event) => {
    sort('Project', 'projectDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsProject_projectDisplayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Project', 'projectDisplayName', true);
  });
  document.querySelector('#pageStatsProject_projectDisplayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Project', 'projectDisplayName', false);
  });

  document.querySelector('#htmButton_patchProject')?.addEventListener('click', (event) => {
    document.querySelector('#patchProjectDialog').open = true;
  });

  document.querySelector('#htmButton_postProject')?.addEventListener('click', (event) => {
    document.querySelector('#postProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deleteProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var projectResource =  event.currentTarget.getAttribute('data-projectResource');
      deleteProject(
          event.currentTarget
          , projectResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportProject')?.addEventListener('click', (event) => {
    document.querySelector('#putimportProjectDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageProject')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterProject(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqProject_created')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_created')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_created')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_archived')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_hubId')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_clusterName')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_projectName')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_projectName')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_projectName')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_projectName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_description')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_description')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_description')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_gpuEnabled')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_gpuEnabled')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_gpuEnabled')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_gpuEnabled')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_displayPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_editPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_userPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_download')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_download')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_download')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_projectResource')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_projectResource')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_projectResource')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_projectResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
});
